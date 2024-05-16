import { Button } from '@/components/Button'
import { CurrencyInput } from '@/components/CurrencyInput'
import { Formik } from 'formik'
import { Autocomplete } from './components/Autocomplete'

export function Development() {
  return (
    <div>
      <Formik initialValues={{ amount: 11.5, option: { uid: '3', name: 'Feijão' } }} onSubmit={console.log}>
        {({ setFieldValue, handleSubmit, values, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 p-4">
              <Autocomplete
                labelValue="name"
                value={values.option}
                options={[
                  { uid: '1', name: 'Batata' },
                  { uid: '2', name: 'Arroz' },
                  { uid: '3', name: 'Feijão' }
                ]}
                onValueChange={value => setFieldValue('option', value)}
              />

              <CurrencyInput
                name="amount"
                value={values.amount}
                onValueChange={data => {
                  setFieldValue('amount', data.floatValue)
                }}
              />

              <div className="flex gap-2">
                <Button type="submit">Submit</Button>
                <Button type="button" onClick={() => resetForm()}>
                  Reset
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
