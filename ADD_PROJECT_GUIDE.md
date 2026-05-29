# How to Add Projects to Your Sanity Portfolio

I've created two simple scripts to help you add projects to your Sanity backend without needing to set up a full Sanity Studio.

## Method 1: Interactive Script (Recommended)

Run the interactive script to add a project step-by-step:

```bash
node addProjectInteractive.js
```

This will prompt you for:
- Project title
- Description  
- Image URL
- Tags (use "Mern" for MERN projects, "Next js" for Next.js projects)
- Project demo URL
- GitHub/Code URL

## Method 2: Edit and Run Script

1. Open `addProject.js` in your editor
2. Uncomment one of the example projects or modify the data
3. Run: `node addProject.js`

## Important Notes

### Tags
Your portfolio uses these exact tags for filtering:
- `Mern` (for MERN stack projects)
- `Next js` (for Next.js projects, note the space)
- `React JS`
- `Html/Css`
- `Sass`
- `vanilla js`
- `Animation`
- `next/nest`

### Images
For images, you can:
1. Upload images directly in the Sanity Studio at https://www.sanity.io/manage
2. Use external image URLs
3. Leave empty and add images later through the Sanity Studio

## After Adding Projects

Once you add a project:
1. Run your React app: `npm run dev`
2. Navigate to the Work/Portfolio section
3. Your new project should appear immediately
4. Click the appropriate filter button to see projects by category

## Example Usage

To add a MERN project interactively:
```bash
node addProjectInteractive.js
```

Then enter:
- Title: "MERN Social Media App"
- Description: "A full-stack social media platform"
- Image URL: (leave empty or provide URL)
- Tags: "Mern"
- Project Link: "https://your-demo.com"
- Code Link: "https://github.com/yourusername/repo"

## Troubleshooting

If you get authentication errors, make sure your `src/client.js` has the correct token and project ID.