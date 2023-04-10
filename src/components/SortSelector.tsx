import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setOrderValue: (orderValue: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ setOrderValue, selectedOrder }: Props) => {
  const orders = [
    { value: "", lable: "Relavance" },
    { value: "name", lable: "name" },
    { value: "-released", lable: "Released Date" },
    { value: "-added", lable: "Added Date" },
    { value: "-created", lable: "Created Date" },
    { value: "-updated", lable: "Updated Date" },
    { value: "-rating", lable: "Rating" },
    { value: "metacritic", lable: "Metacritic" },
  ];

  const currentSortOrder = orders.find(
    (order) => order.value === selectedOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sorting By: {currentSortOrder?.lable || "Relavance"}
      </MenuButton>

      <MenuList>
        {orders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => setOrderValue(order.value)}
          >
            {order.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
