import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Formik } from "formik";

export function Development() {
  return (
    <div>
      <Formik initialValues={{ amount: 11.5 }} onSubmit={console.log}>
        {({ setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <CurrencyInput
              name="amount"
              onValueChange={(data) => {
                setFieldValue("amount", data.floatValue);
              }}
            />
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={() => setFieldValue("amount", 10)}>Reset</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
