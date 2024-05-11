import { Autocomplete } from "@/components/Autocomplete";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";

export function Development() {
  return (
    <div>
      <Autocomplete
        labelValue="name"
        onTypedValueChange={console.log}
        options={[
          {
            id: 14,
            uid: "14acb000-ba5a-40e6-a326-4d9e671c14e7",
            companyUid: "1c2144d6-44e0-47a9-b629-09ffe3956ffc",
            productUid: "6d635c5f-b0dc-44bc-a70b-c72050cbcd22",
            name: "Açaí Médio",
            enabled: true,
            amount: 12.9,
            description: null,
            sku: "M",
            createdAt: "2024-05-04T07:31:17.843Z",
            updatedAt: "2024-05-04T07:31:17.843Z",
            properties: {},
            inventory: null,
          },
          {
            id: 13,
            uid: "ea227784-f175-4c27-9bd5-3b48ad7ccded",
            companyUid: "1c2144d6-44e0-47a9-b629-09ffe3956ffc",
            productUid: "6d635c5f-b0dc-44bc-a70b-c72050cbcd22",
            name: "Pote de açai P",
            enabled: true,
            amount: 12.9,
            description: null,
            sku: "",
            createdAt: "2024-05-03T04:21:44.151Z",
            updatedAt: "2024-05-04T07:13:29.313Z",
            properties: {},
            inventory: null,
          },
        ]}
      />

      <CurrencyInput  value={29.91}/>

      <Input/>
    </div>
  );
}
