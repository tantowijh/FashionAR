using UnityEngine;
using TMPro;

public class DetailHandler : MonoBehaviour
{
    public TextMeshProUGUI targetTitle;
    public string newTitle;
    public TextMeshProUGUI targetDesc;
    public string newDesc;
    public TextMeshProUGUI targetPrice;
    public string newPrice;

    public void UpdateDetailPanel()
    {
        targetTitle.text = newTitle;
        targetDesc.text = newDesc;
        targetPrice.text = newPrice;
    }

    public void ClearDetailPanel()
    {
        targetTitle.text = "";
        targetDesc.text = "";
        targetPrice.text = "";
    }
}