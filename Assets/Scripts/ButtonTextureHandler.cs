using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ButtonTextureHandler : MonoBehaviour
{
    public Button[] buttons;

    public void UpdateButtons(TextureManager textureManager)
    {
        for (int i = 0; i < buttons.Length; i++)
        {
            int index = i; // Capture the index for the lambda
            buttons[i].onClick.RemoveAllListeners();
            buttons[i].onClick.AddListener(() => textureManager.ChangeTexture(index));
        }
    }

    public void ClearButtons()
    {
        for (int i = 0; i < buttons.Length; i++)
        {
            buttons[i].onClick.RemoveAllListeners();
        }
    }
}