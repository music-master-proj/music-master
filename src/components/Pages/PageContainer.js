import { useEffect } from "react";
import Footer from "../Common/Footer";
import ErrorBoundary from '../ErrorHandler'

const PageContainer = ({ title, footer, children }) => {
  useEffect(() => {
    document.title = `MUSIC MASTER-${title}` || "MUSIC MASTER";
  }, [title]);
  return (
    <ErrorBoundary>
      {children}
      {footer && <Footer />}
    </ErrorBoundary>
  );
};

export default PageContainer;