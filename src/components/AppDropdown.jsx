import { Dropdown, DropdownMenu } from "@nextui-org/react";
import { useMemo, useState } from "react";

export default function AppDropdown({
    children,
    ariaLabel = '',
    triggerBuilder,
    initialValue,
}) {
    const [selectedValues, setSelectedValues] = useState(new Set([initialValue]));

    const currentValue = useMemo(
        () => Array.from(selectedValues)[0],
        [selectedValues]
    );

    return (
        <Dropdown placement="bottom-end" key={ariaLabel}>
            {
                triggerBuilder(currentValue)
            }
            <DropdownMenu
                aria-label={ariaLabel} 
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedValues}
                onSelectionChange={setSelectedValues}
            >
                {children}
            </DropdownMenu>
        </Dropdown>
    )
}