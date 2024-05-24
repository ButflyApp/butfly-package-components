import { Button } from '@/components/Button'
import { CurrencyInput } from '@/components/CurrencyInput'
import { Formik } from 'formik'
import { Autocomplete } from '@/components/Autocomplete'
import { useQuery } from 'react-query'
import { searchGitHubUsers } from './data/searchGitHubUsers'
import { useMemo, useState, useCallback, useEffect } from 'react'
import { debounce } from 'lodash'

export function Development() {
  const [githubSearch, setGithubSearch] = useState('')
  const search = useMemo(() => githubSearch, [githubSearch])
  const [debouncedSearch, setDebouncedSearch] = useState('')

  const { data: users, isLoading } = useQuery(['fetchGithubUsers', debouncedSearch], () => searchGitHubUsers(search))

  const debounceSetSearch = useCallback(
    debounce((value) => {
      setDebouncedSearch(value)
    }, 300),
    []
  )

  useEffect(() => {
    debounceSetSearch(githubSearch)
  }, [githubSearch, debounceSetSearch])

  return (
    <div>
      <Formik initialValues={{ amount: 11.5, option: null }} onSubmit={console.log}>
        {({ setFieldValue, handleSubmit, values, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 p-4">
              <Autocomplete
                isLoading={isLoading}
                labelValue="login"
                value={values.option}
                options={users}
                error={true}
                onValueChange={value => setFieldValue('option', value)}
                onTypedValueChange={setGithubSearch}
              />

              <CurrencyInput name="amount" value={values.amount} onValueChange={data => setFieldValue('amount', data.floatValue)} />

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
