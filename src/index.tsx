import '@/output.css'
import { Alert } from "@/components/Alert";
import { Autocomplete } from "@/components/Autocomplete";
import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { Ping } from "@/components/Ping";
import { Label } from "@/components/Label";
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup";
import { Checkbox } from '@/components/Checkbox';
import { Switch } from '@/components/Switch';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '@/components/Select';

const SelectComponents = {
    Root: Select,
    Content: SelectContent,
    Group: SelectGroup,
    Item: SelectItem,
    Label: SelectLabel,
    Separator: SelectSeparator,
    Trigger: SelectTrigger,
    Value: SelectValue,
  }

export {
  Alert,
  Autocomplete,
  Button,
  CurrencyInput,
  Input,
  Ping,
  Label,
  RadioGroup,
  RadioGroupItem,
  Checkbox,
  Switch,
  SelectComponents as Select
};
