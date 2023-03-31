import { createSignal, For } from "solid-js";
import "../src/styles/sendMail.css";

type TemplateList = Array<Record<string, string>>;

export const MailManagement = () => {
    const [templateList, setTemplateList] = createSignal<TemplateList>([]);

    const [receiverKey, setReceiverKey] = createSignal("");

    const [variables, setVariables] = createSignal<string[]>([]);

    const [rawCsv, setRawCsv] = createSignal("");

    const onCsvSubmit = (e: Event) => {
        const target = e.target as HTMLInputElement;

        const input = target.files?.[0];

        if (!input) {
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target?.result as string;
            const lines = text.split("\n");

            const header = lines[0].split(",").map((header) => header.trim());
            setRawCsv(text);
            setVariables(header);

            const templates = [];

            for (let i of lines.slice(1)) {
                if (i.length === 0) continue;

                const row = i.split(",").map((row) => row.trim());
                const obj: Record<string, string> = {};

                for (let j = 0; j < header.length; j++) {
                    obj[header[j]] = row[j];
                }

                templates.push(obj);
            }

            setTemplateList(templates);
        };

        reader.readAsText(input);
    };

    const sendMail = (e: Event) => {
        e.preventDefault();

        console.log(templateList());

        const receivers = templateList().map(
            (template) => template[receiverKey()]
        );

        console.log(receivers);
    };

    const onChangeReceiverColumn = (e: Event) => {
        const el = e.target as HTMLSelectElement;

        const value = el.value;

        setReceiverKey(value);
    };

    return (
        <main class="mail-management-page">
            <section class="form-container">
                <h1>Mail Management Page</h1>

                <form onsubmit={sendMail} class="mail-management-form">
                    <label>
                        <div>Sender</div>
                        <input type="text" />
                    </label>

                    <label>
                        <div>Template Name:</div>
                        <input type="text" />
                    </label>

                    <div>Recipient List (CSV Only Accepted):</div>
                    <label class="input-file-label">
                        {/* <div>Enter .csv file here</div> */}
                        <input
                            type="file"
                            accept=".csv"
                            onChange={onCsvSubmit}
                            class="input-file"
                        />
                    </label>

                    {variables().length > 0 && (
                        <>
                            <div>
                                Receiver Email Column: <br />
                                <select onchange={onChangeReceiverColumn}>
                                    <For each={variables()}>
                                        {(variable) => (
                                            <option value={variable}>
                                                {variable}
                                            </option>
                                        )}
                                    </For>
                                </select>
                            </div>
                        </>
                    )}

                    <input type="submit" value="Send" class="btn btn-send" />
                </form>
            </section>
            <div>
                <section>
                    <table border={1} class="the-table">
                        <thead>
                            <tr>
                                <For each={variables()}>
                                    {(variable) => <th>{variable}</th>}
                                </For>
                            </tr>
                        </thead>

                        <tbody>
                            {templateList().map((template) => (
                                <tr>
                                    <For each={variables()}>
                                        {(variable) => (
                                            <td>{template[variable]}</td>
                                        )}
                                    </For>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    );
};
