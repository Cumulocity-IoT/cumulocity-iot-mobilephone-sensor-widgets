import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as NgRouterModule } from '@angular/router';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { CoreModule, RouterModule, HOOK_COMPONENT } from '@c8y/ngx-components';
import { UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from '@c8y/ngx-components/upgrade';
import { AssetsNavigatorModule } from '@c8y/ngx-components/assets-navigator';
import { BatteryWidgetDemo } from './widgets/battery-widget.component';
import { BatteryWidgetConfigDemo } from './widgets/battery-widget-config.component';
import { VibrationWidgetDemo } from './widgets/vibration-widget.component';
import { VibrationWidgetConfigDemo } from './widgets/vibration-widget-config.component';
import { LuxometerWidgetDemo } from './widgets/luxometer-widget.component';
import { LuxometerWidgetConfigDemo } from './widgets/luxometer-widget-config.component';
import { MicrophoneWidgetDemo } from './widgets/microphone-widget.component';
import { MicrophoneWidgetConfigDemo } from './widgets/microphone-widget-config.component';
import { SignalWidgetDemo } from './widgets/signal-widget.component';
import { SignalWidgetConfigDemo } from './widgets/signal-widget-config.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    NgRouterModule.forRoot([
      ...UPGRADE_ROUTES,
    ], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    AssetsNavigatorModule,
    NgUpgradeModule,
    // Upgrade module must be the last
    UpgradeModule
  ],
  declarations: [BatteryWidgetDemo, BatteryWidgetConfigDemo,VibrationWidgetDemo,VibrationWidgetConfigDemo,LuxometerWidgetDemo,
    LuxometerWidgetConfigDemo,MicrophoneWidgetDemo,MicrophoneWidgetConfigDemo,SignalWidgetConfigDemo,SignalWidgetDemo],
  entryComponents: [BatteryWidgetDemo, BatteryWidgetConfigDemo,VibrationWidgetDemo,VibrationWidgetConfigDemo,LuxometerWidgetDemo,
    LuxometerWidgetConfigDemo,MicrophoneWidgetDemo,MicrophoneWidgetConfigDemo,SignalWidgetConfigDemo,SignalWidgetDemo],
  providers: [{
    provide: HOOK_COMPONENT,
    multi: true,
    useValue: {
      id: 'Battery.text.widget',
      label: 'Battery',
      description: 'Displays Battery % of device',
      component: BatteryWidgetDemo,
      configComponent: BatteryWidgetConfigDemo,
    }
  },
  {
    provide: HOOK_COMPONENT,
    multi: true,
    useValue: {
      id: 'Vibration.text.widget',
      label: 'Vibration',
      description: 'Shows Vibration of the device',
      component: VibrationWidgetDemo,
      configComponent: VibrationWidgetConfigDemo,
    }},
    {
      provide: HOOK_COMPONENT,
      multi: true,
      useValue: {
        id: 'luxometer.text.widget',
        label: 'Luxometer',
        description: 'simple light meter for measuring illuminances (lux) by using the light sensor of your device',
        component: LuxometerWidgetDemo,
        configComponent: LuxometerWidgetConfigDemo,
      }},
      {
        provide: HOOK_COMPONENT,
        multi: true,
        useValue: {
          id: 'microphone.text.widget',
          label: 'Microphone',
          description: 'shows microphone information of the device',
          component: MicrophoneWidgetDemo,
          configComponent: MicrophoneWidgetConfigDemo,
        }},
        {
          provide: HOOK_COMPONENT,
          multi: true,
          useValue: {
            id: 'signal.text.widget',
            label: 'Signal',
            description: 'shows Signals of the device',
            component: SignalWidgetDemo,
            configComponent: SignalWidgetConfigDemo,
          }}
      
],
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
