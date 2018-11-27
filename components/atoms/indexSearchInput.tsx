import React from "react";
import { merge } from "lodash";

interface Props {
  value: string;
  placeholder: string;
  style: React.CSSProperties;
}

const styles = {
  input: {
    height: "20px"
  }
};

const SearchInput = ({ value, placeholder, style }: Props) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      style={merge(styles.input, style)}
    />
  );
};

export default SearchInput;
