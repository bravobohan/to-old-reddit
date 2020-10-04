//
//  SafariExtensionViewController.h
//  to-old-reddit Extension
//
//  Created by bohanwang on 10/4/20.
//

#import <SafariServices/SafariServices.h>

@interface SafariExtensionViewController : SFSafariExtensionViewController

+ (SafariExtensionViewController *)sharedController;

@end
