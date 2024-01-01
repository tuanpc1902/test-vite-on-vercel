import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";
import { Select, Space } from "antd";

function App() {
    const [count, setCount] = useState(0);

    const translate = useTranslation("general").t;
    const language = i18n.language;

    function onChangeLanguage(value: string) {
        i18n.changeLanguage(value);
    }

    return (
        <>
            <Space size={20} align="center" direction="vertical" wrap>
                <Select
                    defaultValue={language ?? "English"}
                    onChange={onChangeLanguage}
                    style={{ width: 120 }}
                    options={[
                        {
                            value: "en",
                            label: "English",
                        },
                        {
                            value: "vi",
                            label: "Vietnamese",
                        },
                    ]}
                />
                <div className="language">{`Language: ${language}`}</div>
                <div className="test-translate">{translate("test")}</div>
            </Space>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
