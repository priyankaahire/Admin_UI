import { NgModule } from "@angular/core";
import { TooltipModule } from "primeng/tooltip";
import { AutoCompleteModule } from "primeng/autocomplete";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { MultiSelectModule } from "primeng/multiselect";
import { DropdownModule } from "primeng/dropdown";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { VirtualScrollerModule } from "primeng/virtualscroller";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { DialogModule } from "primeng/dialog";
import { CheckboxModule } from "primeng/checkbox";
import { InputSwitchModule } from "primeng/inputswitch";
import { DividerModule } from "primeng/divider";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from "primeng/progressbar";
import { ToolbarModule } from "primeng/toolbar";
import { AccordionModule } from "primeng/accordion";
import { RadioButtonModule} from 'primeng/radiobutton';
import { PanelModule} from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


const PRIMENG_MODULES = [
  TooltipModule,
  AutoCompleteModule,
  TableModule,
  ToastModule,
  MultiSelectModule,
  DropdownModule,
  ScrollPanelModule,
  VirtualScrollerModule,
  DynamicDialogModule,
  MenubarModule,
  MenuModule,
  ButtonModule,
  InputTextModule,
  InputTextareaModule,
  OverlayPanelModule,
  MessagesModule,
  MessageModule,
  DialogModule,
  CheckboxModule,
  InputSwitchModule,
  ProgressSpinnerModule,
  ProgressBarModule,
  ToolbarModule,
  DividerModule,
  AccordionModule,
  RadioButtonModule,
  PanelModule,
  ConfirmDialogModule
];
@NgModule({
  declarations: [],
  imports: [PRIMENG_MODULES],
  exports: [PRIMENG_MODULES],
})
export class PrimengUiModule {}