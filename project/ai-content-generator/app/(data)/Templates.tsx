export default [
  {
    name: "Blog Generator",
    desc: "An AI tool that generates blogs based on your blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2125/2125457.png",
    aiPrompt: "Give me 5 blog topic ideas in bullet format based on the given niche & outline. Return the result in a Rich Text Editor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      }
    ]
  },
  {
    name: "YouTube Description Generator",
    desc: "Generate an engaging YouTube video description that improves SEO.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174883.png",
    aiPrompt: "Generate a compelling YouTube description with keywords based on the given video title and key points.",
    slug: "generate-youtube-description",
    form: [
      {
        label: "Enter your video title",
        field: "input",
        name: "videoTitle",
        required: true
      },
      {
        label: "Enter key points of the video",
        field: "textarea",
        name: "keyPoints",
      }
    ]
  },
  {
    name: "Twitter Post Generator",
    desc: "Create engaging tweets for Twitter.",
    category: "Twitter",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733635.png",
    aiPrompt: "Generate an engaging Twitter post based on the given topic. Use a friendly tone and include relevant hashtags.",
    slug: "generate-twitter-post",
    form: [
      {
        label: "Enter the topic of the post",
        field: "input",
        name: "topic",
        required: true
      }
    ]
  },
  {
    name: "Instagram Post Generator",
    desc: "Generate creative and engaging Instagram captions.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    aiPrompt: "Generate an engaging Instagram caption based on the given topic. Make it creative and include relevant hashtags.",
    slug: "generate-instagram-post",
    form: [
      {
        label: "Enter the topic of the post",
        field: "input",
        name: "topic",
        required: true
      }
    ]
  },
  {
    name: "Facebook Post Generator",
    desc: "Create engaging Facebook posts to attract your audience.",
    category: "Facebook",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174848.png",
    aiPrompt: "Generate a Facebook post that engages users based on the given topic. Use a conversational tone and include a CTA.",
    slug: "generate-facebook-post",
    form: [
      {
        label: "Enter the topic of the post",
        field: "input",
        name: "topic",
        required: true
      }
    ]
  },
  {
    name: "LinkedIn Post Generator",
    desc: "Create professional LinkedIn posts for engagement.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174857.png",
    aiPrompt: "Generate a LinkedIn post with a professional tone based on the given topic. Make it insightful and engaging.",
    slug: "generate-linkedin-post",
    form: [
      {
        label: "Enter the topic of the post",
        field: "input",
        name: "topic",
        required: true
      }
    ]
  },
  {
    name: "Ad Copy Generator",
    desc: "Create high-converting ad copies for marketing campaigns.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/906/906329.png",
    aiPrompt: "Generate a high-converting ad copy for {platform} with a call-to-action based on the given product details.",
    slug: "generate-ad-copy",
    form: [
      {
        label: "Select Ad Platform",
        field: "select",
        name: "platform",
        options: ["Facebook Ads", "Google Ads", "Instagram Ads"],
        required: true
      },
      {
        label: "Enter product/service details",
        field: "textarea",
        name: "details",
        required: true
      }
    ]
  },
  {
    name: "Email Subject Line Generator",
    desc: "Generate compelling email subject lines to increase open rates.",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt: "Give me 5 email subject lines that are catchy and increase open rates based on the given email content.",
    slug: "generate-email-subject",
    form: [
      {
        label: "Enter email content summary",
        field: "textarea",
        name: "emailContent",
        required: true
      }
    ]
  }
];
