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
            <section class="form-container2">
                <h1>Template Management Page</h1>

                <form onsubmit={submitForm}>
                    <div class="create-template">Create Template </div>
                    <div>
                        <div>HTML Template:</div>
                        <textarea
                            value={htmlBody()}
                            class="textarea"
                            onInput={(e) => setHtmlBody(e.target.value)}
                        />
                    </div>

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
            <section class="template-list">
                <h2>Templates</h2>

                <ul>
                    <For each={templates()}>
                        {(template) => <li>{template}</li>}
                    </For>
                </ul>
            </section>
        </main>
    );
};
