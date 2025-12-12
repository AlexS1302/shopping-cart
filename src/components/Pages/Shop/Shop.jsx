import { useMemo } from "react";
import useFilteredProducts from "../../../hooks/useFilteredProducts";
import { useSearchParams } from "react-router";
import styles from "./Shop.module.css";
import RefinePanel from "./RefinePanel/RefinePanel";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import ProductCards from "../../UI/ProductCards/ProductCards";
import ShopLink from "../../UI/ShopLink/ShopLink";

function Shop() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const sortParam = searchParams.get("sort") || "";
  const [sortBy, order = "asc"] = sortParam.split("-");
  const limit = parseInt(searchParams.get("limit") || 30);
  const skip = parseInt(searchParams.get("skip") || 0);

  const filters = useMemo(
    () => ({
      q,
      category,
      sortBy,
      order,
      limit,
      skip,
    }),
    [q, category, sortBy, order, limit, skip]
  );

  const { productInfo, loading, error, totalCount } =
    useFilteredProducts(filters);

  const showMoreProducts = productInfo.length + skip < totalCount;

  if (loading) return <p>Loading</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={styles.Shop}>
      {productInfo.length > 0 ? (
        <>
          <RefinePanel filters={filters} />
          <section className={styles.productGrid}>
            {productInfo.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </section>
          {showMoreProducts && <LoadMoreButton limit={limit} skip={skip} />}
        </>
      ) : (
        <section className={styles.emptyShop}>
          <h3>Oops, nothing turned up for "{q}".</h3>
          <p>Try searching with different keywords!</p>
          <ShopLink />
        </section>
      )}
    </div>
  );
}
export default Shop;
