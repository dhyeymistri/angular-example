import { Component } from '@angular/core';
import { aboutUsAccordian } from '../../models/aboutUsAccordian';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  check_text="sdfs"
 accordianData = [
  new aboutUsAccordian("Mr.CEO, CEO", "assets/images/employee.jpg","The CEO of a corporation or company typically reports to the board of directors and is charged with maximizing the value of the business, which may include maximizing the share price, market share, revenues, or another element.", "Here comes the educational qualifications of the CEO", "CEOacc", "CEOimg", "CEOwork", "CEOed"),
  new aboutUsAccordian("Mr.President, President", "assets/images/employee.jpg", "This individual leads and manages the board of directors. They are responsible for setting agendas, running successful board meetings, establishing committees, and other duties. They normally represent the company at public events.", "Here comes the educational qualifications of the President", "PresiAcc", "presiImg", "presiWork", "presiId"),
  new aboutUsAccordian("Mr.Secretary, Secretary", "assets/images/employee.jpg", "The secretary manages the board's administrative tasks. They take the board meeting minutes and maintain accurate corporate records.", "Here comes the educational qualifications of the Secretary", "secyAcc", "secyImg", "secyWork", "secyEd")
 ]
}
