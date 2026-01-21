import os
from google import genai
from google.genai import types

# API Key
API_KEY = "AIzaSyD37aKWHctyq-5987QAeO0nt2UvE7gqvAQ"
client = genai.Client(api_key=API_KEY)

# Global style suffix
STYLE_SUFFIX = "clean, minimalist, professional, neutral color palette, modern SaaS aesthetic, flat or semi-flat illustration style, no people, no faces, no city landmarks, no text, no logos, white or light background"

# Image prompts
IMAGES = [
    {
        "name": "hero-automation",
        "prompt": f"Minimal abstract illustration of an AI automation workflow, showing data flowing between connected systems and modules, nodes and arrows representing automated processes, modern SaaS-style design, technical and professional, clean layout, no people, no city imagery, no text, no logos, neutral colors, high clarity, suitable for website hero section, {STYLE_SUFFIX}"
    },
    {
        "name": "service-ai-agents",
        "prompt": f"Illustration of an AI agent system handling conversations and tasks automatically, chat interface elements connected to backend systems, flow-based automation visual, modern SaaS dashboard style, abstract and technical, no people, no text, no branding, {STYLE_SUFFIX}"
    },
    {
        "name": "service-workflow",
        "prompt": f"Visual diagram of automated business workflows, blocks representing CRM, documents, invoicing, and reporting connected by arrows, clean system architecture illustration, abstract automation flow, modern enterprise SaaS aesthetic, no people, no text, neutral professional colors, {STYLE_SUFFIX}"
    },
    {
        "name": "service-custom-ai",
        "prompt": f"Abstract illustration of a custom AI platform dashboard with modular components, charts, panels, and system controls, technical and professional UI-style design, modern SaaS look, no people, no text, no logos, clean and structured layout, {STYLE_SUFFIX}"
    },
    {
        "name": "process-steps",
        "prompt": f"Step-by-step AI automation process diagram, numbered blocks connected by arrows representing discovery, audit, design, deployment, and optimization, clean flat illustration style, modern SaaS design, no people, no text, no branding, white background, {STYLE_SUFFIX}"
    },
    {
        "name": "service-compliance",
        "prompt": f"Abstract illustration representing data security and compliance in AI systems, secure data flows, shield and lock metaphors integrated into system diagrams, enterprise technology style, clean and minimal, no people, no text, professional neutral colors, {STYLE_SUFFIX}"
    }
]

# Output directory
OUTPUT_DIR = "C:/Users/innat/aiautomationagencynyc/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def generate_image(name, prompt, aspect_ratio="16:9", size="2K"):
    """Generate a single image with the given prompt."""
    print(f"\nGenerating: {name}")
    print(f"Prompt: {prompt[:100]}...")

    try:
        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=[prompt],
            config=types.GenerateContentConfig(
                response_modalities=['TEXT', 'IMAGE'],
                image_config=types.ImageConfig(
                    aspect_ratio=aspect_ratio,
                    image_size=size
                ),
            ),
        )

        for part in response.parts:
            if part.text:
                print(f"Response text: {part.text}")
            elif part.inline_data:
                image = part.as_image()
                output_path = f"{OUTPUT_DIR}/{name}.jpg"
                image.save(output_path)
                print(f"Saved: {output_path}")
                return True
    except Exception as e:
        print(f"Error generating {name}: {e}")
        return False

    return False

if __name__ == "__main__":
    print("Starting image generation...")
    print(f"Output directory: {OUTPUT_DIR}")

    successful = 0
    for img in IMAGES:
        # Use 16:9 for hero, 4:3 for service cards
        aspect = "16:9" if img["name"] == "hero-automation" else "4:3"
        if generate_image(img["name"], img["prompt"], aspect_ratio=aspect):
            successful += 1

    print(f"\n\nCompleted: {successful}/{len(IMAGES)} images generated")
    print(f"Images saved to: {OUTPUT_DIR}")
