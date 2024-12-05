using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TextureChanger : MonoBehaviour
{
    [SerializeField]
    private GameObject targetObject;

    [SerializeField]
    private Texture targetTexture;
    
    private Renderer targetRenderer;

    void Start()
    {
        if (targetObject != null)
        {
            targetRenderer = targetObject.GetComponent<Renderer>();
            if (targetRenderer == null)
            {
                Debug.LogError("No Renderer found on targetObject.");
            }
        }
        else
        {
            Debug.LogError("targetObject is not assigned.");
        }

        Button button = gameObject.GetComponent<Button>();
        if (button != null)
        {
            button.onClick.AddListener(SetTexture);
        }
        else
        {
            Debug.LogError("No Button component found on this GameObject.");
        }
    }

    public void SetTexture()
    {
        if (targetRenderer != null && targetTexture != null)
        {
            targetRenderer.material.mainTexture = targetTexture;
        }
        else
        {
            Debug.LogError("targetRenderer or targetTexture is not assigned.");
        }
    }
}