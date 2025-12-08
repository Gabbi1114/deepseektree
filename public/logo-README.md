# Company Logo

## How to Add Your Company Logo

1. **File Name**: Save your logo as `logo.png` (must be PNG format for transparency support)

2. **Location**: Place the file in the `public/` folder (same level as this README)

3. **File Path**: The logo will be accessible at `/logo.png` in the application

4. **Recommended Size**:

   - Width: 500-800px (will be scaled responsively)
   - Format: PNG with transparent background
   - File size: Keep under 500KB for fast loading

5. **Display**: The logo appears prominently in the intro screen as the main element, with a glowing golden shadow effect.

## Example Structure

```
public/
  ├── logo.png          ← Your company logo here
  ├── logo-README.md    ← This file
  └── photos/           ← Photo gallery folder
```

## Notes

- The logo will automatically scale for different screen sizes (mobile, tablet, desktop)
- If the logo file is not found, it will be hidden and a warning will appear in the console
- The logo appears before the text in the intro animation sequence
