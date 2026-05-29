import { Search } from "lucide-react";
import { categories } from "@/constants/sample-data";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function FilterBar() {
  return (
    <form className="grid gap-3 rounded-[28px] border border-white/75 bg-white p-4 shadow-[0_16px_28px_rgba(29,35,39,0.12)] md:grid-cols-[1.3fr_repeat(5,1fr)_auto]">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input name="q" placeholder="Search products, brand, model, location" className="pl-9" />
      </div>
      <Select name="category" defaultValue="">
        <option value="">Category</option>
        {categories.map((category) => <option key={category}>{category}</option>)}
      </Select>
      <Input name="brand" placeholder="Brand" />
      <Select name="condition" defaultValue="">
        <option value="">Condition</option>
        <option>Ready To Use</option>
        <option>Functional</option>
        <option>Needs Repair</option>
      </Select>
      <Select name="status" defaultValue="">
        <option value="">Status</option>
        <option>Ready</option>
        <option>Inspection</option>
        <option>Maintenance</option>
      </Select>
      <Input name="location" placeholder="Location" />
      <Button type="submit">Filter</Button>
    </form>
  );
}
