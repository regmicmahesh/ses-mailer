import "./styles/index.css";
import { Router, Routes, Route } from "@solidjs/router";
import { TemplateManagement } from "./createTemplate";
import { HomePage } from "./homePage";
import { Navbar } from "./Navbar";
import { MailManagement } from "./sendMail";

export const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/mail" component={MailManagement} />
        <Route path="/template" component={TemplateManagement} />
      </Routes>
    </Router>
  );
};
