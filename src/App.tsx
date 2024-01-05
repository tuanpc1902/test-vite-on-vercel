import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";
import { Select, Space } from "antd";
import AccountWithdrawalPage from "./pages/account/account-withdrawal/account-withdrawal.page";

function App() {
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
                    style={{ width: 120, position: "absolute", top: 50 }}
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
                <div className="language">{`Current language: ${language}`}</div>
                <div className="test-translate">{translate("test")}</div>
            </Space>
            <AccountWithdrawalPage />
        </>
    );
}

export default App;
