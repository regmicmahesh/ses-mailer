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
        <div>
            <h1>Template Management Page</h1>

            <hr />

            <form onsubmit={submitForm}>
                <h2>Create Template </h2>
                <div>
                    HTML Template: <br />
                    <textarea
                        value={htmlBody()}
                        onInput={(e) => setHtmlBody(e.target.value)}
                    />
                </div>

                <div>
                    Subject: <br />
                    <input
                        type="text"
                        value={subject()}
                        onInput={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div>
                    Template Name: <br />
                    <input
                        type="text"
                        value={templateName()}
                        onInput={(e) => setTemplateName(e.target.value)}
                    />
                </div>

                <input type="submit" value="Submit" />
            </form>

            <hr />

            <h2>Templates</h2>


            <ul>
                <For each={templates()}>{

                    (template) => <li>{template}</li>
                }</For>

                </ul>




        </div>
    );
};
