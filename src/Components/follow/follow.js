import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../stores/fetchTweet/fetchTweets";
import style from './follow.module.css';

export default function Follow() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets);
  const loading = useSelector((state) => state.tweets.loading);
  const error = useSelector((state) => state.tweets.error);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSeeMore = () => {
    setVisibleCards(tweets.length); 
  };

  console.log(tweets);

  return (
    <>
      <section className={style.followsection}>
        <div className={style.wrapper}>
          {tweets.slice(0, visibleCards).map((tweet) => (
            <li key={tweet.id} className={style.userList}>
              <img className={style.img} src={tweet.images} alt="not found" />
              <div className={style.midpart}>
                <h3>{tweet.first_name} {tweet.last_name}</h3>
                <p>{tweet.email}</p>
              </div>
              <button className={style.btn}>Follow</button>
            </li>
          ))}
        </div>
      {visibleCards < tweets.length && (
        <button className={style.seeMoreButton} onClick={handleSeeMore}>
          See More
        </button>
      )}
      </section>
    </>
  );
}
