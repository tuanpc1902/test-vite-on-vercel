import { Button, Checkbox, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

// type ErrorField = {
//     errors: string[];
//     name: string[];
//     warning: string[];
// };

// type FinishFailed = {
//     errorFields: ErrorField[];
//     outOfDate: string;
//     values: FieldType;
// };

function AccountWithdrawalPage() {
    const translate = useTranslation("account-withdrawal-page").t;
    const onFinish = (values: FieldType) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: unknown) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="account-withdrawal-page">
            <Form
                name="basic"
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 24 }}
                style={{width: 600}}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label={translate("username")}
                    name="username"
                    rules={[
                        { required: true, message: translate("pleaseInputYourUsername") },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label={translate("password")}
                    name="password"
                    rules={[
                        { required: true, message: translate("pleaseInputYourPassword") },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 6, span: 16 }}
                >
                    <Checkbox>{translate("rememberMe")}</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        {translate("submit")}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default AccountWithdrawalPage;
