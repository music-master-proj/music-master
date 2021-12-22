
const User = require('../models/users');
let message = '';

const getAllUsers = async function(req, res){
    try{
        const users = await User.find();
        logger.info(`founded ${users.length} users`);
        return res.status(200).json(users);
    }
    catch(error){
        message = 'Error - Failed searching for all users';
        logger.error(`${message} + ${err}`);
        return res.status(400).json({message})
    }
};


const checkId = async function(req, res, next) {
    try{
        const { id } = req.params;
        const user = await User.findOne({_id: id});
        if(!user){
            message = 'Error - User not exist';
            logger.error(message);
            return res.status(401).json({message});
        }
        else{
            next();
        }
    }
    catch(error){
        message = 'Error - Problem find User';
        logger.error(message);
        return res.status(401).json({message});
    }
};

const getUser = async function(req, res){
    try{
        const user = await User.findById({ _id: req.params.id });
        return res.status(200).json({user});
    }
    catch (error) {return res.status(400).json({error});}
};
module.exports =  { getAllUsers, getUser ,checkId};