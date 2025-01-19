try:
    from dotenv import load_dotenv
    print("dotenv imported successfully")
except ModuleNotFoundError as e:
    print(f"Error importing dotenv: {e}")