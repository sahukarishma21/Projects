import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../stores/fetchTweet/fetchTweets";
import style from './follow.module.css';

export default function Follow() {
    const dispatch = useDispatch();
    const tweets = useSelector((state) => state.tweets.tweets);
    const loading = useSelector((state) => state.tweets.loading);
    const error = useSelector((state) => state.tweets.error);
    const [visibleCards, setVisibleCards] = useState(4);
    const [followedUsers, setFollowedUsers] = useState([]);

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

    const handleFollow = (userId) => {
        if (isUserFollowed(userId)) {
            setFollowedUsers((prevFollowedUsers) => prevFollowedUsers.filter((id) => id !== userId));
        } else {
            setFollowedUsers((prevFollowedUsers) => [...prevFollowedUsers, userId]);
        }
    };

    const isUserFollowed = (userId) => {
        return followedUsers.includes(userId);
    };

    return (
        <>
            <section className={style.followsection}>
                <div className={style.wrapper}>
                    <h3>Who to follow</h3>
                    {tweets.slice(0, visibleCards).map((tweet) => (
                        <li key={tweet.id} className={style.userList}>
                            <img className={style.img} src={tweet.images} alt="not found" />
                            <div className={style.midpart}>
                                <h3>{tweet.first_name} {tweet.last_name}</h3>
                                <p>{tweet.email}</p>
                            </div>
                            {!isUserFollowed(tweet.id) ? (
                                <button className={style.btn} onClick={() => handleFollow(tweet.id)}>
                                    Follow
                                </button>
                            ) : (
                                <button className={style.btn1} onClick={() => handleFollow(tweet.id)}>
                                    Following
                                </button>
                            )}
                        </li>
                    ))}
                    {visibleCards < tweets.length && (
                        <button className={style.seeMoreButton} onClick={handleSeeMore}>
                            See More
                        </button>
                    )}
                </div>
            </section>
        </>
    );
}
