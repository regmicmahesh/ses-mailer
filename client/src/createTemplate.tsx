import "../src/styles/TemplateManagement.css";
import "../src/styles/sendMail.css";
import { createEffect, createSignal, For } from "solid-js";

export const TemplateManagement = () => {
    const [htmlBody, setHtmlBody] = createSignal("");
    const [subject, setSubject] = createSignal("");
    const [templateName, setTemplateName] = createSignal("");

    const [templates, setTemplates] = createSignal<string[]>([]);

    const submitForm = (e: Event) => {
        e.preventDefault();
    };

    createEffect(() => {
        setTemplates(["template1", "template2", "template3"]);
    }, [templates]);

    return (
        <main class="template-page">
            <section class="form-container">
                <h1>Template Management Page</h1>

                <form onsubmit={submitForm}>
                    <label>
                        <div class="create-template">Create HTML Template </div>
                        <div>
                            <textarea
                                value={htmlBody()}
                                class="textarea"
                                onInput={(e) => setHtmlBody(e.target.value)}
                            />
                        </div>
                    </label>

                    <label>
                        <div>Subject:</div>
                        <input
                            type="text"
                            value={subject()}
                            onInput={(e) => setSubject(e.target.value)}
                        />
                    </label>

                    <label>
                        <div>Template Name:</div>
                        <input
                            type="text"
                            value={templateName()}
                            onInput={(e) => setTemplateName(e.target.value)}
                        />
                    </label>

                    <input class="btn" type="submit" value="Submit" />
                </form>
            </section>
            <section class="template-list-container">
                <h2>Templates</h2>

                <ul class="template-list">
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    <li>Hi, I am Abhishek</li>
                    {/* <For each={templates()}>
                        {(template) => <li>{template}</li>}
                    </For> */}
                </ul>
            </section>
        </main>
    );
};
