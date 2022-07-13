import ListRow from "./ListRow/ListRow";
import ListTitle from "./ListTitle/ListTitle";
import ListItem from "./ListItem/ListItem";
import styles from "./List.module.css";
const itemsTitle = {
  name: <ListTitle title="name" />,
  suplier: <ListTitle title="suplier" />,
  location: <ListTitle title="location" />,
  vibe: <ListTitle title="vibe" />,
  perks: <ListTitle title="perks" />,
  from: <ListTitle title="from" />,
  amenities: <ListTitle hideButtons={true} title="amenities" />,
};
const item = {
  name: <ListItem type={"textName"}>Grand Hotel du Palais Royal</ListItem>,
  suplier: <ListItem type={"text"}>Fairmont</ListItem>,
  location: <ListItem type={"text"}>Paris, France</ListItem>,
  vibe: <ListItem type={"text"}>Sophisticated</ListItem>,
  perks: <ListItem type={"tag"}>Grand</ListItem>,
  from: <ListItem type={"cost"}> 10.5</ListItem>,
  amenities: <ListItem type={"icons"}></ListItem>,
};

const List = () => {
  return (
    <div className={styles.wrapper}>
      <ListRow type={"title"} item={itemsTitle} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
      <ListRow item={item} />
    </div>
  );
};
export default List;
