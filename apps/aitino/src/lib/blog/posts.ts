// Import the markdown files for each post
const imports = import.meta.glob('./posts/*.md', { eager: true });

const posts = [];
for (const path in imports) {
    const post = imports[path];
    posts.push(post);
}

// Expose this info to other files
export default posts;