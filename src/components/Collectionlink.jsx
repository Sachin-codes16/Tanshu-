import { Link } from "react-router-dom";

const CollectionLink = ({ category, subCategory, itemName }) => {
  const formattedCategory = category.toLowerCase();
  const formattedSub = subCategory.toLowerCase().replace(/ /g, "-");
  const formattedItem = itemName.toLowerCase().replace(/ /g, "-");

  const isSettingCollection =
    formattedCategory === "living" &&
    formattedSub === "fabric-seating" &&
    formattedItem === "seating-collections";

  const finalPath = isSettingCollection
    ? "/setting-collection"
    : `/products/${formattedCategory}/${formattedSub}/${formattedItem}`;

  return <Link to={finalPath}>{itemName}</Link>;
};

export default CollectionLink;