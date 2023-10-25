import React from "react";
import Review from "./Review";
import { populateReviews } from "../utils/api";

function ReviewList({ reviews = [], deleteReview, setReviewScore }) {
  if (reviews.length) {
    const list = reviews
      .sort((leftReview, rightReview) => {
        console.log(leftReview,rightReview)
        return leftReview.critic.preferred_name.localeCompare(
          rightReview.critic.preferred_name
        );
      })
      .map((review) => (
        <Review
          key={review.review_id}
          review={review}
          deleteReview={deleteReview}
          setReviewScore={setReviewScore}
        />
      ));

    return (
      <section className="mt-4">
        <h3>Reviews</h3>
        {list}
      </section>
    );
  }
  return null;
}

export default ReviewList;
