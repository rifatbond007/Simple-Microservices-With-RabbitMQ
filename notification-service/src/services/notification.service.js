const sendNotification = async (order) => {
  // For now, just log to console
  console.log(`[Notification] Order received for user ${order.userId}:`, order);
  
  // In real-world, you could:
  // - send an email via SMTP or SendGrid
  // - send SMS via Twilio
  // - push notification via FCM
};

module.exports = { sendNotification };
