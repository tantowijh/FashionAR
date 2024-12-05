using UnityEngine;

public class ToggleVisibility : MonoBehaviour
{
    public GameObject targetObject;  // The UI element to toggle

    // This method will be called when the button is clicked
    public void Toggle()
    {
        // Toggle the active state of the target object
        targetObject.SetActive(!targetObject.activeSelf);
    }
}