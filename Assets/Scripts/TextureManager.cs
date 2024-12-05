using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TextureManager : MonoBehaviour {
    public Texture[] textures;
    public GameObject[] targetObjects;
    private Renderer[] targetRenderers;

    void Start() {
        if (targetObjects.Length > 0) {
            targetRenderers = new Renderer[targetObjects.Length];
            for (int i = 0; i < targetObjects.Length; i++) {
                if (targetObjects[i] != null) {
                    targetRenderers[i] = targetObjects[i].GetComponent<Renderer>();
                    if (targetRenderers[i] == null) {
                        Debug.LogError("Target object " + targetObjects[i].name + " does not have a Renderer component.");
                    }
                } else {
                    Debug.LogError("Target object at index " + i + " is not assigned.");
                }
            }
        } else {
            Debug.LogError("Target objects are not assigned.");
        }
    }

    public void ChangeTexture(int index) {
        if (targetRenderers == null || targetRenderers.Length == 0) {
            Debug.LogError("Target renderers are not assigned.");
            return;
        }

        if (index >= 0 && index < textures.Length) {
            foreach (var renderer in targetRenderers) {
                if (renderer != null) {
                    renderer.material.mainTexture = textures[index];
                    Debug.Log("Texture changed to: " + textures[index].name + " for target: " + renderer.gameObject.name);
                }
            }
        } else {
            Debug.LogError("Index out of range: " + index);
        }
    }
}