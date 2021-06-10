import "./PageTemplate.scss";

const PageTemplate = ({ children }) => {
  return (
    <div className="template">
      <h1 className="template__header">Client manager</h1>
      <div className="template__content">{children}</div>
    </div>
  );
};

export default PageTemplate;
