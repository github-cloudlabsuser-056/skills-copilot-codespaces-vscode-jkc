# Login to Azure
Connect-AzAccount

# Create a resource group
$resourceGroup = New-AzResourceGroup -Name "MyResourceGroup" -Location "West Europe"

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroup.ResourceGroupName -Name "mystorageaccount" -Location "West Europe" -SkuName "Standard_LRS" -Kind "StorageV2"