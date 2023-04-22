package controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlaygroundController {
	@GetMapping("/")
	public String home() {
		System.out.println("하이하");
		return "데이터 준비중 ...";
	}

}
