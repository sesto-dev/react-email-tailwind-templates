import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

const DemoTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export default DemoTemplate