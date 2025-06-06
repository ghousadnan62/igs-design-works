
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { Download, Upload, Loader2 } from 'lucide-react';

const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processCurrentLogo = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      // Load the current logo from the public folder
      const response = await fetch('/lovable-uploads/c8902c12-8420-4005-8cfd-f9a343563d56.png');
      const blob = await response.blob();
      
      // Create image element
      const imageElement = await loadImage(blob);
      setOriginalImage(URL.createObjectURL(blob));
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedUrl);
      
    } catch (err) {
      console.error('Error processing logo:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadProcessedLogo = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'logo-transparent.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Logo Background Removal Tool
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <Button 
              onClick={processCurrentLogo} 
              disabled={isProcessing}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing Logo...
                </>
              ) : (
                'Remove Background from Current Logo'
              )}
            </Button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              Error: {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {originalImage && (
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Original Logo</h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <img 
                    src={originalImage} 
                    alt="Original logo" 
                    className="max-w-full h-auto mx-auto"
                  />
                </div>
              </div>
            )}

            {processedImage && (
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Transparent Logo</h3>
                <div className="border border-gray-200 rounded-lg p-4 bg-gradient-to-br from-gray-100 to-white" 
                     style={{
                       backgroundImage: `
                         linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
                         linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
                         linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
                         linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
                       `,
                       backgroundSize: '20px 20px',
                       backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                     }}
                >
                  <img 
                    src={processedImage} 
                    alt="Processed logo with transparent background" 
                    className="max-w-full h-auto mx-auto"
                  />
                </div>
                <Button 
                  onClick={downloadProcessedLogo}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Transparent Logo
                </Button>
              </div>
            )}
          </div>

          {processedImage && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Next Steps:</h4>
              <ol className="list-decimal list-inside space-y-1 text-blue-800">
                <li>Download the transparent logo using the button above</li>
                <li>Upload it to your project to replace the current logo</li>
                <li>Update the image references in your Header and Footer components</li>
              </ol>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LogoProcessor;
