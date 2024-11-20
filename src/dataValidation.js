import { dummyUsers, dummyReviews, dummyItems } from './data.js';

// Function to validate userId and fixerId
const validateIds = () => {
  const userIds = dummyUsers.map(user => user.userId);
  const fixerIds = dummyUsers.filter(user => user.isFixer).map(user => user.userId);
  const itemIds = dummyItems.map(item => item.itemId);

  let allUserIdsValid = true;
  let allFixerIdsValid = true;
  let allItemIdsValid = true;

  // Validate userId and fixerId in reviews
  dummyReviews.forEach(review => {
    if (!userIds.includes(review.userId)) {
      console.error(`Invalid userId: ${review.userId} in review: ${review.reviewId}`);
      allUserIdsValid = false;
    }
    if (!fixerIds.includes(review.fixerId)) {
      console.error(`Invalid fixerId: ${review.fixerId} in review: ${review.reviewId}`);
      allFixerIdsValid = false;
    }
    if (!itemIds.includes(review.itemId)) {
      console.error(`Invalid itemId: ${review.itemId} in review: ${review.reviewId}`);
      allItemIdsValid = false;
    }
  });

  // Validate userId and fixerId in items
  dummyItems.forEach(item => {
    if (!userIds.includes(item.userId)) {
      console.error(`Invalid userId: ${item.userId} in item: ${item.itemId}`);
      allUserIdsValid = false;
    }
    if (item.fixerId !== "none" && !fixerIds.includes(item.fixerId)) {
      console.error(`Invalid fixerId: ${item.fixerId} in item: ${item.itemId}`);
      allFixerIdsValid = false;
    }
  });

  if (allUserIdsValid) {
    console.log('All userIds in reviews and items are valid.');
  }
  if (allFixerIdsValid) {
    console.log('All fixerIds in reviews and items are valid.');
  }
  if (allItemIdsValid) {
    console.log('All itemIds in reviews are valid.');
  }
};

validateIds();