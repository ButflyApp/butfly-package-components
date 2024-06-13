import "@/output.css";
import { Alert } from "@/components/Alert";
import { Autocomplete } from "@/components/Autocomplete";
import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { Ping } from "@/components/Ping";
import { Label } from "@/components/Label";
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup";
import { Checkbox } from "@/components/Checkbox";
import { Switch } from "@/components/Switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "@/components/DropdownMenu";

const SelectComponents = {
  Root: Select,
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Label: SelectLabel,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  Value: SelectValue,
};

const DropdownComponents = {
  Root: DropdownMenu,
  MenuTrigger: DropdownMenuTrigger,
  MenuContent: DropdownMenuContent,
  MenuItem: DropdownMenuItem,
  MenuCheckboxItem: DropdownMenuCheckboxItem,
  MenuRadioItem: DropdownMenuRadioItem,
  MenuLabel: DropdownMenuLabel,
  MenuSeparator: DropdownMenuSeparator,
  MenuShortcut: DropdownMenuShortcut,
  MenuGroup: DropdownMenuGroup,
  MenuPortal: DropdownMenuPortal,
  MenuSub: DropdownMenuSub,
  MenuSubContent: DropdownMenuSubContent,
  MenuSubTrigger: DropdownMenuSubTrigger,
  MenuRadioGroup: DropdownMenuRadioGroup,
};

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
  SelectComponents as Select,
  DropdownComponents as DropdownMenu,
};
