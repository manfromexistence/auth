```



{/* <CardDescription className="grid grid-cols-3 gap-2">
            <Languages />
            <Narrators />
            <Accents />
          </CardDescription> */}


const languages = [
  {
    value: "eng",
    label: "English",
  },
  {
    value: "hd",
    label: "Hindi",
  },
  {
    value: "bn",
    label: "Bangla",
  },
  {
    value: "jp",
    label: "Japanese",
  },
  {
    value: "ar",
    label: "Arabic",
  },
]
const narrators = [
  {
    value: "jarvis",
    label: "Jarvis",
  },
  {
    value: "edit",
    label: "Edit",
  },
]

const accents = [
  {
    value: "captain jack sparow",
    label: "Captain Jack Sparow",
  },
  {
    value: "tony stark",
    label: "Tony Stark",
  },
]

export function Languages() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? languages.find((languages) => languages.value === value)?.label
            : "Lang..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search languages..." />
          <CommandList>
            <CommandEmpty>No languages found.</CommandEmpty>
            <CommandGroup>
              {languages.map((languages) => (
                <CommandItem
                  key={languages.value}
                  value={languages.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === languages.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {languages.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
export function Narrators() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between truncate"
        >
          {value
            ? narrators.find((narrators) => narrators.value === value)?.label
            : "Narrators"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search narrators..." />
          <CommandList>
            <CommandEmpty>No narrators found.</CommandEmpty>
            <CommandGroup>
              {narrators.map((narrators) => (
                <CommandItem
                  key={narrators.value}
                  value={narrators.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === narrators.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {narrators.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
export function Accents() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? accents.find((accents) => accents.value === value)?.label
            : "Accents"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search accents..." />
          <CommandList>
            <CommandEmpty>No accents found.</CommandEmpty>
            <CommandGroup>
              {accents.map((accents) => (
                <CommandItem
                  key={accents.value}
                  value={accents.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === accents.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {accents.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

```