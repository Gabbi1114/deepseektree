# How to Add Your Photos

To add your own photos to the polaroid gallery, follow these simple steps:

## Step 1: Prepare Your Photos

1. Choose **10 photos** you want to display
2. Make sure they are in one of these formats: `.jpg`, `.jpeg`, `.png`, or `.webp`
3. For best results, use square photos (1:1 aspect ratio) or photos that look good when cropped to square

## Step 2: Name Your Photos

Rename your photos to match this pattern:

- `photo0.jpg` (or `.jpeg`, `.png`, `.webp`)
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`
- `photo6.jpg`
- `photo7.jpg`
- `photo8.jpg`
- `photo9.jpg`

**Important:** The numbers start from `0` and go up to `9` (for 10 photos total).

## Step 3: Add Photos to This Folder

1. Copy your renamed photos into this folder: `public/photos/`
2. Make sure each photo is named exactly as shown above (e.g., `photo0.jpg`, `photo1.jpg`, etc.)

## Step 4: Test Locally

1. Run `npm run dev` to start the development server
2. Open your browser and check if your photos appear in the polaroid gallery
3. If a photo doesn't load, a colorful placeholder will appear instead

## Notes

- **You don't need all 10 photos** - if you only have 5 photos, just add `photo0.jpg` through `photo4.jpg`. The rest will show placeholders.
- **Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`
- **File size:** Try to keep photos under 2MB each for faster loading
- **Aspect ratio:** Square photos (1:1) work best, but any ratio will work

## Example

Your `public/photos/` folder should look like this:

```
public/
  photos/
    photo0.jpg
    photo1.jpg
    photo2.jpg
    photo3.jpg
    photo4.jpg
    photo5.jpg
    photo6.jpg
    photo7.jpg
    photo8.jpg
    photo9.jpg
```

That's it! Your photos will automatically appear in the web experience. 🎉
