import { Autocomplete } from "@/components/Autocomplete";

export function Development() {
  return (
    <div>
      <Autocomplete labelValue="Teste" onTypedValueChange={(value) => console.log(value)} options={[]} />
    </div>
  );
}
