import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { data } from "./dataProvider";
import { Table } from "../../Component";

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MyTable: Story = {
  render: () => {
    const { columns, rows } = data;
    return <Table columns={columns} rows={rows} />;
  },
};
