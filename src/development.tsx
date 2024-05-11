import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Formik } from "formik";

export function Development() {
  return (
    <div>
      <Formik initialValues={{ amount: 11.5 }} onSubmit={console.log}>
        {({ setFieldValue, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <CurrencyInput
              name="amount"
              value={values.amount}
              onValueChange={(data) => {
                console.log(data)
                setFieldValue("amount", data.floatValue);
              }}
            />
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
