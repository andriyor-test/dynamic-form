import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../types/question-base';
import {QuestionControlService} from '../../services/question-control.service';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Output() changeForm = new EventEmitter();
  get isValid() { return this.form.controls[this.question.key].valid; }

  onRequiredChange() {
    this.question.required = !this.question.required;
    this.changeForm.emit();
  }
}
